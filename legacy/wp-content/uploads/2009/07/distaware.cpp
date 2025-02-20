#include <NdbApi.hpp>
#include <Ndb.hpp>
#include <stdio.h>
#include <string.h>
#include <iostream>
#include <cstdlib> 

static void run_application(Ndb_cluster_connection &, int);

#define PRINT_ERROR(code,msg) \
  std::cout << "Error in " << __FILE__ << ", line: " << __LINE__ \
            << ", code: " << code \
            << ", msg: " << msg << "." << std::endl
#define APIERROR(error) { \
  PRINT_ERROR(error.code,error.message); \
  exit(-1); }

int main(int argc, char** argv)
{
  if (argc != 3)
  {
    std::cout << "Arguments are <connect_string cluster><sub_id>.\n";
    exit(-1);
  }
  // ndb_init must be called first
  ndb_init();

  // connect to cluster and run application
  {
    const char *connectstring = argv[1];
    int sub_id = atoi(argv[2]);

    // Object representing the cluster
    Ndb_cluster_connection cluster_connection(connectstring);

    // Connect to cluster management server (ndb_mgmd)
    if (cluster_connection.connect(4 /* retries               */,
				   5 /* delay between retries */,
				   1 /* verbose               */))
    {
      std::cout << "Cluster management server was not ready within 30 secs.\n";
      exit(-1);
    }

    // Connect and wait for the storage nodes (ndbd's)
    if (cluster_connection.wait_until_ready(30,0) < 0)
    {
      std::cout << "Cluster was not ready within 30 secs.\n";
      exit(-1);
    }

    // run the application code
    run_application(cluster_connection, sub_id);
  }

  ndb_end(0);

  return 0;
}

static void do_display(Ndb &, int);

static void run_application(Ndb_cluster_connection &cluster_connection,
                            int sub_id)
{

  /********************************************
   * Connect to database via NdbApi           *
   ********************************************/
  // Object representing the database
  Ndb myNdb( &cluster_connection, "TEST_DB" );
  if (myNdb.init()) APIERROR(myNdb.getNdbError());

  do_display(myNdb, sub_id);

}

 
static void do_display(Ndb &myNdb, int sub_id)
{
  const NdbDictionary::Dictionary* myDict= myNdb.getDictionary();
  const NdbDictionary::Table *namesTable= myDict->getTable("names");
  const NdbDictionary::Table *servicesTable= myDict->getTable("services");

  NdbRecAttr *myRecAttr;

  Ndb::Key_part_ptr dist_key[2];
  dist_key[0].ptr = (const void*) &sub_id;
  dist_key[0].len = sizeof(sub_id);
  dist_key[1].ptr = NULL;
  dist_key[1].len = NULL;

  if (namesTable == NULL) 
    APIERROR(myDict->getNdbError());

  if (servicesTable == NULL) 
    APIERROR(myDict->getNdbError());

  NdbTransaction *myTransaction= myNdb.startTransaction(namesTable,
							dist_key);
  if (myTransaction == NULL) APIERROR(myNdb.getNdbError());
    
  NdbOperation *myOperation= myTransaction->getNdbOperation(namesTable);
  if (myOperation == NULL) APIERROR(myTransaction->getNdbError());

  myOperation->readTuple(NdbOperation::LM_Read);
  myOperation->equal("sub_id",sub_id);
  
  myRecAttr= myOperation->getValue("name", NULL);
  if (myRecAttr == NULL) APIERROR(myTransaction->getNdbError());

  // Perform operations on "services" table as well as part of another operation 
  // if required; the subscriber's data will be in the same data node

  if (myTransaction->execute( NdbTransaction::Commit ) == -1)
    APIERROR(myTransaction->getNdbError());

  printf(" %2d    %s\n", 
	 sub_id, myRecAttr->aRef());

  myNdb.closeTransaction(myTransaction);

 }
 

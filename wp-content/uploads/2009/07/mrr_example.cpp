#include <mysql.h>
#include <NdbApi.hpp>
#include <stdio.h>
#include <iostream>
#include <cstdlib>
#include <string.h>

static void run_application(MYSQL &, Ndb_cluster_connection &);

#define PRINT_ERROR(code,msg) \
  std::cout << "Error in " << __FILE__ << ", line: " << __LINE__ \
            << ", code: " << code \
            << ", msg: " << msg << "." << std::endl
#define MYSQLERROR(mysql) { \
  PRINT_ERROR(mysql_errno(&mysql),mysql_error(&mysql)); \
  exit(-1); }
#define APIERROR(error) { \
  PRINT_ERROR(error.code,error.message); \
  exit(-1); }

int main(int argc, char** argv)
{
  if (argc != 3)
  {
    std::cout << "Arguments are <mysqld port> <connect_string>.\n";
    exit(-1);
  }
  // ndb_init must be called first
  ndb_init();

  // connect to mysql server and cluster and run application
  {
    int mysqld_port  = atoi (argv[1]);
    const char *connectstring = argv[2];

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

    // Optionally connect and wait for the storage nodes (ndbd's)
    if (cluster_connection.wait_until_ready(30,0) < 0)
    {
      std::cout << "Cluster was not ready within 30 secs.\n";
      exit(-1);
    }

    // connect to mysql server
    MYSQL mysql;
    if ( !mysql_init(&mysql) ) {
      std::cout << "mysql_init failed\n";
      exit(-1);
    }
    if ( !mysql_real_connect(&mysql, "localhost", "root", "", "",
			     mysqld_port, NULL, 0) )
      MYSQLERROR(mysql);
    
    // run the application code
    run_application(mysql, cluster_connection);
  }

  ndb_end(0);

  return 0;
}

static void create_table(MYSQL &);
static void drop_table(MYSQL &);
static void do_insert(Ndb &);
static void do_indexScan(Ndb &);

static void run_application(MYSQL &mysql,
			    Ndb_cluster_connection &cluster_connection)
{
  /********************************************
   * Connect to database via mysql-c          *
   ********************************************/
  mysql_query(&mysql, "CREATE DATABASE TEST_DB_1");
  if (mysql_query(&mysql, "USE TEST_DB_1") != 0) MYSQLERROR(mysql);
  create_table(mysql);

  /********************************************
   * Connect to database via NdbApi           *
   ********************************************/
  // Object representing the database
  Ndb myNdb( &cluster_connection, "TEST_DB_1" );
  if (myNdb.init()) APIERROR(myNdb.getNdbError());

  do_insert(myNdb);
  do_indexScan(myNdb);

  drop_table(mysql);

  mysql_query(&mysql, "DROP DATABASE TEST_DB_1");
}

/*********************************************************
 * Create a table named COUNTRY if it does not exist     *
 *********************************************************/
static void create_table(MYSQL &mysql)
{
  if (mysql_query(&mysql, 
		  "DROP TABLE IF EXISTS"
		  "  COUNTRY"))
    MYSQLERROR(mysql);

  if (mysql_query(&mysql, 
		  "CREATE TABLE"
		  "  COUNTRY"
		  "    (SUB_ID INT UNSIGNED NOT NULL PRIMARY KEY,"
		  "     COUNTRY_CODE INT UNSIGNED NOT NULL)"
		  "  ENGINE=NDB"))
    MYSQLERROR(mysql);

}

/***********************************
 * Drop a table named MYTABLENAME 
 ***********************************/
static void drop_table(MYSQL &mysql)
{
  if (mysql_query(&mysql, 
		  "DROP TABLE"
		  "  COUNTRY"))
    MYSQLERROR(mysql);

}

static void do_insert(Ndb &myNdb)
{
  NdbDictionary::Dictionary* myDict= myNdb.getDictionary();
  const NdbDictionary::Table *myTable= myDict->getTable("COUNTRY");

  if (myTable == NULL) 
    APIERROR(myDict->getNdbError());

  NdbTransaction *myTransaction= myNdb.startTransaction();
  if (myTransaction == NULL) APIERROR(myNdb.getNdbError());
  
  NdbOperation *myOperation= myTransaction->getNdbOperation(myTable);
  if (myOperation == NULL) APIERROR(myTransaction->getNdbError());
  
  myOperation->insertTuple();
  myOperation->equal("SUB_ID", 1);
  myOperation->setValue("COUNTRY_CODE", 44);

  myOperation= myTransaction->getNdbOperation(myTable);
  if (myOperation == NULL) APIERROR(myTransaction->getNdbError());
  
  myOperation->insertTuple();
  myOperation->equal("SUB_ID", 2);
  myOperation->setValue("COUNTRY_CODE", 1);
  
  myOperation= myTransaction->getNdbOperation(myTable);
  if (myOperation == NULL) APIERROR(myTransaction->getNdbError());
  
  myOperation->insertTuple();
  myOperation->equal("SUB_ID", 4);
  myOperation->setValue("COUNTRY_CODE", 61);
  
  myOperation= myTransaction->getNdbOperation(myTable);
  if (myOperation == NULL) APIERROR(myTransaction->getNdbError());
  
  myOperation->insertTuple();
  myOperation->equal("SUB_ID", 5);
  myOperation->setValue("COUNTRY_CODE", 33);
  
  myOperation= myTransaction->getNdbOperation(myTable);
  if (myOperation == NULL) APIERROR(myTransaction->getNdbError());
  
  myOperation->insertTuple();
  myOperation->equal("SUB_ID", 7);
  myOperation->setValue("COUNTRY_CODE", 46);
  
  myOperation= myTransaction->getNdbOperation(myTable);
  if (myOperation == NULL) APIERROR(myTransaction->getNdbError());
  
  myOperation->insertTuple();
  myOperation->equal("SUB_ID", 8);
  myOperation->setValue("COUNTRY_CODE", 1);
  
  myOperation= myTransaction->getNdbOperation(myTable);
  if (myOperation == NULL) APIERROR(myTransaction->getNdbError());
  
  myOperation->insertTuple();
  myOperation->equal("SUB_ID", 9);
  myOperation->setValue("COUNTRY_CODE", 44);
  
  myOperation= myTransaction->getNdbOperation(myTable);
  if (myOperation == NULL) APIERROR(myTransaction->getNdbError());
  
  myOperation->insertTuple();
  myOperation->equal("SUB_ID", 10);
  myOperation->setValue("COUNTRY_CODE", 33);
  
  myOperation= myTransaction->getNdbOperation(myTable);
  if (myOperation == NULL) APIERROR(myTransaction->getNdbError());
  
  myOperation->insertTuple();
  myOperation->equal("SUB_ID", 12);
  myOperation->setValue("COUNTRY_CODE", 44);
  
  myOperation= myTransaction->getNdbOperation(myTable);
  if (myOperation == NULL) APIERROR(myTransaction->getNdbError());
  
  myOperation->insertTuple();
  myOperation->equal("SUB_ID", 13);
  myOperation->setValue("COUNTRY_CODE", 1);
  
  myOperation= myTransaction->getNdbOperation(myTable);
  if (myOperation == NULL) APIERROR(myTransaction->getNdbError());
  
  myOperation->insertTuple();
  myOperation->equal("SUB_ID", 14);
  myOperation->setValue("COUNTRY_CODE", 61);
  
  if (myTransaction->execute( NdbTransaction::Commit ) == -1)
    APIERROR(myTransaction->getNdbError());
  
  myNdb.closeTransaction(myTransaction);

}


/************************************************************
 * Read and print all tuples via primary ordered index scan *
 ************************************************************/
static void do_indexScan(Ndb &myNdb)
{
  NdbDictionary::Dictionary* myDict= myNdb.getDictionary();
  const NdbDictionary::Index *myPIndex= myDict->getIndex("PRIMARY", "COUNTRY");

  if (myPIndex == NULL)
    APIERROR(myDict->getNdbError());

  std::cout << "SUB_ID    COUNTRY_CODE" << std::endl;
  
  NdbTransaction *myTransaction=myNdb.startTransaction();
  if (myTransaction == NULL) APIERROR(myNdb.getNdbError());

  NdbIndexScanOperation *psop;
  
  /* RecAttrs for NdbRecAttr Api */
  NdbRecAttr *recAttrAttr1;
  NdbRecAttr *recAttrAttr2;

  psop=myTransaction->getNdbIndexScanOperation(myPIndex);
      
  if (psop == NULL) APIERROR(myTransaction->getNdbError());

  Uint32 scanFlags= 
    NdbScanOperation::SF_OrderBy |
    NdbScanOperation::SF_MultiRange |
    NdbScanOperation::SF_ReadRangeNo;

  if (psop->readTuples(NdbOperation::LM_Read, 
		       scanFlags, 
		       (Uint32) 0,          // batch 
		       (Uint32) 0) != 0)    // parallel
    APIERROR (myTransaction->getNdbError());
  
  /* Add a bound
   * Tuples where SUB_ID >=2 and < 4 
   */
  Uint32 low=2;
  Uint32 high=4;
  Uint32 match=13;
  
  if (psop->setBound("SUB_ID", NdbIndexScanOperation::BoundLE, (char*)&low))
    APIERROR(myTransaction->getNdbError());
  if (psop->setBound("SUB_ID", NdbIndexScanOperation::BoundGT, (char*)&high))
    APIERROR(myTransaction->getNdbError());
  
  if (psop->end_of_bound(0))
    APIERROR(psop->getNdbError());
  
  /* Second bound
   * Tuples where SUB_ID > 5 and <=9
   */
  low=5;
  high=9;
  if (psop->setBound("SUB_ID", NdbIndexScanOperation::BoundLT, (char*)&low))
    APIERROR(myTransaction->getNdbError());
  if (psop->setBound("SUB_ID", NdbIndexScanOperation::BoundGE, (char*)&high))
    APIERROR(myTransaction->getNdbError());
  
  if (psop->end_of_bound(1))
    APIERROR(psop->getNdbError());
  
  /* Third bound
   * Tuples where SUB_ID == 13
       */
  
  if (psop->setBound("SUB_ID", NdbIndexScanOperation::BoundEQ, (char*)&match))
    APIERROR(myTransaction->getNdbError());
  
  if (psop->end_of_bound(2))
    APIERROR(psop->getNdbError());
      
      
  /* Read all columns */
  recAttrAttr1=psop->getValue("SUB_ID");
  recAttrAttr2=psop->getValue("COUNTRY_CODE");

  if(myTransaction->execute( NdbTransaction::Commit ) != 0)
    APIERROR(myTransaction->getNdbError());
  
  if (myTransaction->getNdbError().code != 0)
    APIERROR(myTransaction->getNdbError());

  while (psop->nextResult(true) == 0)
    {
      printf(" %8d    %8d   Range no : %2d\n", 
	     recAttrAttr1->u_32_value(),
	     recAttrAttr2->u_32_value(),
	     psop->get_range_no());
    }
  psop->close();
  
  myNdb.closeTransaction(myTransaction);
  
}



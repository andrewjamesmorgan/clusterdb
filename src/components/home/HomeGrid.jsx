import PayloadCell from "./homeGrid/PayloadCell";
import VersionValidationCell from "./homeGrid/VersionValidationCell";
import NYC24Cell from "./homeGrid/NYC24Cell";
import London24Relational from "./homeGrid/London24RelationalCell";
import London24QuizCell from "./homeGrid/London24QuizCell";
import SampleDRCell from "./homeGrid/SampleDRCell";
import WhenCacheCell from "./homeGrid/WhenCacheCell";
import OutlierPatternCell from "./homeGrid/OutlierPatternCell";
import TinyDocs from "./homeGrid/TinyDocuments";
import ArbitrarySearchCell from "./homeGrid/ArbitrarySearchCell";

export default function HomeGrid({action}) {
  return (
  <>
    <div className='responsive-grid'>
      <ArbitrarySearchCell action={action} />
    </div>
    <div className='responsive-grid'>
      <TinyDocs action={action} />
      <OutlierPatternCell action={action} />
      <WhenCacheCell action={action} />
    </div>
    <div className='responsive-grid'>
      <PayloadCell action={action} />
      <VersionValidationCell action={action} />
      <SampleDRCell action={action} />
    </div>
    <div className='responsive-grid'>
      <London24Relational action={action} />
      <London24QuizCell action={action} />
      <NYC24Cell action={action} />
    </div>
  </>
  );
}
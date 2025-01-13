import PayloadCell from "./homeGrid/PayloadCell";
import VersionValidationCell from "./homeGrid/VersionValidationCell";

export default function HomeGrid({action}) {
  return (
  <>
    <div className='responsive-grid'>
      <PayloadCell action={action} />
      <VersionValidationCell action={action} />
    </div>
  </>
  );
}
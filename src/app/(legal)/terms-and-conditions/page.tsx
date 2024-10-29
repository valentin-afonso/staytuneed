import { performRequest } from "@/lib/datocms";
import { queryConditions } from "@/cms/queries/queryConditions";
import { StructuredText } from "react-datocms";

export default async function page() {
  const { termAndCondition } = await performRequest({ query: queryConditions });
  return (
    <div className="legal_page">
      <h1>{termAndCondition.title}</h1>
      <div className="structured_text">
        <StructuredText data={termAndCondition.contentPage} />
      </div>
    </div>
  );
}

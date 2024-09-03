import { performRequest } from "@/lib/datocms";
import { queryPolicyPrivacy } from "@/cms/queries/queryPrivacyPolicy";
import { StructuredText } from "react-datocms";

export default async function page() {
  const { privacyPolicy } = await performRequest({ query: queryPolicyPrivacy });
  return (
    <>
      <h1>{privacyPolicy.title}</h1>
      <div className="structured_text">
        <StructuredText data={privacyPolicy.contentPage} />
      </div>
    </>
  );
}

import { Layout } from "@/components";
import { SearchContainer, SettingsContainer } from "@/containers";

export default function SettingsPage() {
  return (
    <Layout>
      <SearchContainer showTitle={false} />
      <SettingsContainer />
    </Layout>
  );
}

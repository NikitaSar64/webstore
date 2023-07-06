import { Layout } from "@/components";
import { ProfileContainer, SearchContainer } from "@/containers";

export default function ProfilePage() {
  return (
    <Layout>
      <SearchContainer showTitle={false} />
      <ProfileContainer />
    </Layout>
  );
}

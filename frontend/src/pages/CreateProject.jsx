import { Button, Layout, Typography, Space, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useCreateProject } from "../mutations/useCreateProject";

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const layoutStyle = {
  minHeight: "100vh",
  backgroundColor: "#f5f7fa",
};

const headerStyle = {
  background: "#fff",
  borderBottom: "1px solid #f0f0f0",
  padding: "0 48px",
  display: "flex",
  alignItems: "center",
};

const contentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 16px",
};

const footerStyle = {
  textAlign: "center",
  color: "#8c8c8c",
  background: "transparent",
};

const cardStyle = {
  width: 420,
  borderRadius: 12,
  border: "1px solid #f0f0f0",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
};

const CreateProject = () => {
  const { createProjectMutation } = useCreateProject();

  const handleCreateProject = async () => {
    try {
      await createProjectMutation();
    } catch (err) {
      console.error("Error creating project", err);
    }
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Title level={4} style={{ margin: 0 }}>
          Playground
        </Title>
      </Header>

      <Content style={contentStyle}>
        <Card style={cardStyle}>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Title level={3} style={{ marginBottom: 0 }}>
              Create Project
            </Title>

            <Text type="secondary">
              Start a new playground and begin coding instantly.
            </Text>

            <Button
              type="primary"
              size="large"
              icon={<PlusOutlined />}
              block
              loading={createProjectMutation.isLoading}
              onClick={handleCreateProject}
            >
              Create Playground
            </Button>
          </Space>
        </Card>
      </Content>

      <Footer style={footerStyle}>
        © {new Date().getFullYear()} Playground Platform
      </Footer>
    </Layout>
  );
};

export default CreateProject;

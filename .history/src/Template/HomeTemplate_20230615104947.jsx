import React from 'react'
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};
const HomeTemplate = () => {
    return (
        <div>
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
                size={[0, 48]}
            >
                <Layout>
                    <Header style={headerStyle}>Header</Header>
                    <Content style={contentStyle}>Content</Content>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
                <Layout>
                    <Header style={headerStyle}>Header</Header>
                    <Layout hasSider>
                        <Sider style={siderStyle}>Sider</Sider>
                        <Content style={contentStyle}>Content</Content>
                    </Layout>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
                <Layout>
                    <Header style={headerStyle}>Header</Header>
                    <Layout hasSider>
                        <Content style={contentStyle}>Content</Content>
                        <Sider style={siderStyle}>Sider</Sider>
                    </Layout>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
                <Layout>
                    <Sider style={siderStyle}>Sider</Sider>
                    <Layout>
                        <Header style={headerStyle}>Header</Header>
                        <Content style={contentStyle}>Content</Content>
                        <Footer style={footerStyle}>Footer</Footer>
                    </Layout>
                </Layout>
            </Space>
            );
        </div>
    )
}

export default HomeTemplate
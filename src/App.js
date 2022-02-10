import { Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { default as Title } from 'antd/lib/skeleton/Title';
import React from 'react';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <div className="App">
     <Layout>
      <Header style={{ padding: 10 }}>
      
          <Title style={{ color: 'red' }}>SHRIDEEP</Title>
      </Header>
      <Layout  >
        <Sider style={{background:"#001529"}}>
        <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
            </Menu.Item>
              <SubMenu
                title={
                  <span>
                   
                    <span>Home</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='Country 1'>
                  <Menu.Item key='location1'> Location 1</Menu.Item>
                  <Menu.Item key='location2'> Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>

            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
            
              <SubMenu
                title={
                  <span>
                   
                    <span>About US</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='Country 1'>
                  <Menu.Item key='location1'> Location 1</Menu.Item>
                  <Menu.Item key='location2'> Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>

            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
              
            >
            
              <SubMenu
                title={
                  <span>
                   
                    <span>Product</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='Country 1'>
                  <Menu.Item key='location1'> Location 1</Menu.Item>
                  <Menu.Item key='location2'> Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
           

            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
            
              <SubMenu
                title={
                  <span>
                   
                    <span>Administration</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='Country 1'>
                  <Menu.Item key='location1'> Location 1</Menu.Item>
                  <Menu.Item key='location2'> Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
           

            <Menu
              defaultSelectedKeys={['Dashboard']}
            
            >
            
              <SubMenu
                title={
                  <span>
                   
                    <span>Services</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='Country 1'>
                  <Menu.Item key='location1'> Location 1</Menu.Item>
                  <Menu.Item key='location2'> Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
           
           
        </Sider>
        <Content style={{background:"blue",height:"440px"}}>Content hiii</Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Ant Design Layout example Created by Khair</Footer>
    </Layout>
  </div>
);

export default App;
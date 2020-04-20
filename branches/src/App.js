import React, { useState }  from 'react';
import { Layout, Row, Col } from 'antd';
import Navigation from './components/Menu/Navigation';
import nedbankLogo from './Images/nedbank_logo.png';
import BankerRoleAdmin from './pages/BankerRoleAdmin/BankerRoleAdmin';
import BranchCategoryAdmin from './pages/BranchCategory/BranchCategoryAdmin';
import StructureAdmin from './pages/StructureAdmin/StructureAdmin';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
const { Header, Content  } = Layout;

function App(){

  const [isLoading, setLoading] = useState(false);


  return (
    <Layout>
        <Header className="app-header">
          <img src={nedbankLogo} height={50} width={100} />
        </Header>
        <Content className="app-content">
          <Router>
              <Row>
                <Col span={24}>
                  <Navigation />
                </Col>
              </Row>
              <br/>
              <Row justify='center'>
                <Col xs={24} sm={24} md={24} lg={22} xl={22}>
                  <Switch>
                      <Route path="/admin/role">
                        <BankerRoleAdmin />
                      </Route>
                      <Route path="/admin/branchcategory">
                        <BranchCategoryAdmin />
                      </Route>
                      <Route path="/admin/structure">
                        <StructureAdmin />
                      </Route>
                      <Route path="/home">
                        <Home />
                      </Route>
                      <Route path="/">
                        <Home />
                      </Route>
                  </Switch>
                </Col>
              </Row>
          </Router>
        </Content>
    </Layout>
  );
}

export default App;

import React from 'react'
import Header from './Header'

const Home = () => {
    return(
        <div className='home-page'>
            <Header />
            <h1 className='home-page-h1'>Main page</h1>
            <p className='home-page-p'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis<br /> dis
                parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla<br /> consequat massa quis enim.
                Donec pede justo, fringilla vel,<br /> aliquet nec, vulputate eget,
                arcu. In enim justo,<br /> rhoncus ut, imperdiet a, venenatis vitae<br />
                justo. Nullam dictum felis<br /> eu pede mollis pretium. Integer tincidunt.
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                lorem ante, dapibus<br /> in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius <br />laoreet.
                Quisque rutrum. Aenean<br /> imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                Maecenas tempus, tellus eget<br /> condimentum rhoncus, sem quam semper libero,
                sit amet adipiscing sem neque</p>
        </div>
    )
}

export default Home


// import React from 'react';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// const { Header, Content, Footer } = Layout;
// import { Link } from 'react-router-dom';
// import About from './About';
// // const items = new Array(3).fill(null).map((_, index) => ({
// //   key: String(index + 1),
// //   label: `nav ${index + 1}`,
// // }));
// const Home = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//     <Layout>
//       <Header
//         style={{
//           position: 'sticky',
//           top: 0,
//           zIndex: 1,
//           width: '100%',
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <div className="demo-logo" />
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           <Link to='/about'>About me</Link>
//           style={{
//             flex: 1,
//             minWidth: 0,
//           }}
//         />
//       </Header>
//       <Content
//         style={{
//           padding: '0 48px',
//         }}
//       >
//         <Breadcrumb
//           style={{
//             margin: '16px 0',
//           }}
//         >
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>List</Breadcrumb.Item>
//           <Breadcrumb.Item>App</Breadcrumb.Item>
//         </Breadcrumb>
//         <div
//           style={{
//             padding: 24,
//             minHeight: 380,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//           }}
//         >
//           Content
//         </div>
//       </Content>
//       <Footer
//         style={{
//           textAlign: 'center',
//         }}
//       >
//         cirru ©{new Date().getFullYear()} Created by cirru
//       </Footer>
//     </Layout>
//   );
// };
// export default Home;
import { Navbar, Nav, Form } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TopNav = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ borderBottom: '1px solid #000',width:"auto" }}>
            <Navbar.Brand className='m-3 text-bold'> ABCHotel</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="me-auto">
                </Nav>
                <Form className="d-flex align-items-center">
                    <div >
                        <i style={{ fontSize: '2rem', borderRadius: '50%', border: '1px' }} className="bi bi-bell"></i>
                    </div>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/807e/4166/675c981c4887dd334f4f33bd380e59b1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lYbIz4Mew27seTYhxsqBSVoHuWjwcWOSdmU~suYPeuiOdeKqChb6vcZBZ2S-v2Bz5e7yRa5-rSfDvi7TB7MHMqlRakoK5owM9OMY4MZ6EI4tP1-PZxqkVlohPGpmlReMjKfP3vT0ImvXr~4ZcYrGQzwO8DSXM6UouCNqT0FpGnDNRyqKBY10B7iSZUk1CXCWNiBLuMnZ6so9-HwtSkb7Ec1DHfvfroEHlkmrZ4Bswzccyf0v0GCt9R-~eJ63FDe636XqnvQkPCt5l1GJKZ8XSEajDvyQduINyuaxFu7~oyl446PKY3lYVI876OUwPr0LpUz8CMfAX~gZeMmBZBMSFw__"
                        style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', margin: '10px' }}
                        alt="profile"
                    />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;

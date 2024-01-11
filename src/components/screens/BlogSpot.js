import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Ellipse1 from '../../assets/images/Ellipse -1.png';
import Ellipse2 from '../../assets/images/Ellipse -2.png';
import Ellipse3 from '../../assets/images/Ellipse 39.png';

function BlogSpot() {
  return (
    <MainContainer>
        <HeadingH1>Blog Posts</HeadingH1>
        <NavLink to={`singlepageblog`} title='click on the card'>
            <CardContainer>
                <Image src={Ellipse1} alt='image'/>
                <HeadingH2>Alpine Hackathon ReportBack</HeadingH2>
                <Span>A quest post by <Link>mesko</Link>on 22 oct 2013</Span>
                <Paragraph>deleniti, a optio ipsam. Molestiae, quos tempore. Omnis dolores nulla perferendis dicta tenetur! Blanditiis mollitia aut aliquam.Quod placeat error cumque, totam expedita sed doloremque necessitatibus, architecto repellendus dolor explicabo minus ipsa adipisci similique dicta. Minus minima vero ullam molestiae? Ipsum labore porro dolor nisi, reiciendis temporibus.Qui impedit nam temporibus, amet vitae cumque eius facilis culpa quo ipsa, maxime debitis ea nulla ipsum, dolorem.
                </Paragraph>
                
            </CardContainer>
        </NavLink>
        <NavLink to='singlepageblog' title='click on the card'>
            <CardContainer>
                <Image src={Ellipse2} alt='image'/>
                <HeadingH2>Alpine Hackathon ReportBack</HeadingH2>
                <Span>A quest post by <Link>mesko</Link>on 22 oct 2013</Span>
                <Paragraph>deleniti, a optio ipsam. Molestiae, quos tempore. Omnis dolores nulla perferendis dicta tenetur! Blanditiis mollitia aut aliquam.Quod placeat error cumque, totam expedita sed doloremque necessitatibus, architecto repellendus dolor explicabo minus ipsa adipisci similique dicta. Minus minima vero ullam molestiae? Ipsum labore porro dolor nisi, reiciendis temporibus.Qui impedit nam temporibus, amet vitae cumque eius facilis culpa quo ipsa, maxime debitis ea nulla ipsum, dolorem.
                </Paragraph>
            </CardContainer>
        </NavLink>
        <NavLink to='singlepageblog' title='click on the card'>
            <CardContainer >
                <Image src={Ellipse3} alt='image'/>
                <HeadingH2>Alpine Hackathon ReportBack</HeadingH2>
                <Span>A quest post by <Link>mesko</Link>on 22 oct 2013</Span>
                <Paragraph>deleniti, a optio ipsam. Molestiae, quos tempore. Omnis dolores nulla perferendis dicta tenetur! Blanditiis mollitia aut aliquam.Quod placeat error cumque, totam expedita sed doloremque necessitatibus, architecto repellendus dolor explicabo minus ipsa adipisci similique dicta. Minus minima vero ullam molestiae? Ipsum labore porro dolor nisi, reiciendis temporibus.Qui impedit nam temporibus, amet vitae cumque eius facilis culpa quo ipsa, maxime debitis ea nulla ipsum, dolorem.
                </Paragraph>
            </CardContainer>
        </NavLink>
    </MainContainer>
  )
};

const MainContainer = styled.div`
    max-width:70%;
    margin:80px auto 30px;
    padding: 10px 150px;
    border:.5px solid #000;
    box-shadow:-2px -2px 5px #000;
    border-radius:10px;
`;
const HeadingH1 = styled.h1`
    text-align:center;
    font-size:44px;
    margin:10px 0 100px;
    color:#000;
`;
const CardContainer = styled.div`
    border:.1px solid #9c9c9c;
    box-shadow:1px 1px 12px #000;
    padding:60px 100px;
    width:100%;
    margin-bottom:90px;
    &:hover {
        box-shadow: 1px 1px 20px #000;
    }
    border-radius:14px;
`;
const Image = styled.img`
    width:80px;
    height:80px;
    display:block;
    margin:0 auto;
    margin-bottom:12px;
`;
const HeadingH2 = styled.h2`
    text-align:center;
`;
const Span = styled.span``;
const Paragraph = styled.p``;

export default BlogSpot;
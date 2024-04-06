import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import { LayoutWrapper } from "./styles";

export default function Layout({children}: any) {

  return (
    <LayoutWrapper>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </LayoutWrapper>
  )
}

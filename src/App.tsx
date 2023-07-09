import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FormData from "./components/formData";
import LayoutData from "./components/layoutData";
import { Select, Card, Row, Col, Button } from "antd";
import { useTranslation } from "react-i18next";

function Layout() {
  const { t } = useTranslation();

  return (
    <Row gutter={16}>
      <Col>
        <Link to="/layoutdata">
          <Card title={t("test1")} bordered={false} style={{ width: 300 }}>
            <p>{t("layout")}</p>
          </Card>
        </Link>
      </Col>
      <Col>
        <Link to="/formdata">
          <Card title={t("test2")} bordered={false} style={{ width: 300 }}>
            <p>{t("form")}</p>
          </Card>
        </Link>
      </Col>
    </Row>
  );
}

function App() {
  const { t, i18n } = useTranslation();
  const handleChangeLang = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="App">
      <Row className="App-row">
        <Select
          placeholder={i18n.language.toUpperCase()}
          allowClear
          options={[
            { value: "th", label: "TH" },
            { value: "en", label: "EN" },
          ]}
          className="App-lang"
          onChange={handleChangeLang}
        ></Select>
      </Row>
      <Row className="App-row">
        <Button href="/" className="btnMain">
          <span className="mainSpan">{t("mainpage")}</span>
        </Button>
      </Row>
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="layoutdata" element={<LayoutData />} />
              <Route path="formdata" element={<FormData />} />
            </Routes>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

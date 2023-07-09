import React, { useState } from "react";
import { Card, Button, Divider, Row, Col } from "antd";
import "./layoutData.scss";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function LayoutData() {
  let { lang } = useParams();
  const { t, i18n } = useTranslation();
  i18n.changeLanguage(lang);
  const [shapeLists, setShape] = useState([
    {
      shapeName: "square",
    },
    {
      shapeName: "circle",
    },
    {
      shapeName: "oval",
    },
    {
      shapeName: "trapezoid",
    },
    {
      shapeName: "rectangle",
    },
    {
      shapeName: "parallelogram",
    },
  ]);

  const shapeElement = () => {
    return shapeLists.map((shape: any, index: number) => (
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} key={index}>
        <Card className="cardShape">
          <div className={`${shape.shapeName}`}></div>
        </Card>
      </Col>
    ));
  };

  const moveShape = (side: string) => {
    let first = {
      shapeName: "",
    };
    let last = {
      shapeName: "",
    };
    let temp = [];
    let result = [];
    for (let shape in shapeLists) {
      const index = parseInt(shape);
      if (index === 0 && side === "left") {
        first.shapeName = shapeLists[index].shapeName;
      } else if (index === shapeLists.length - 1 && side === "right") {
        last.shapeName = shapeLists[index].shapeName;
      } else {
        temp.push(shapeLists[index]);
      }
    }
    if (side === "left") {
      for (let t of temp) {
        result.push(t);
      }
      result.push(first);
    } else if (side === "right") {
      result.push(last);
      for (let t of temp) {
        result.push(t);
      }
    }
    setShape(result);
  };

  const movePosition = () => {
    let first = [];
    let last = [];
    let result = [];
    for (let shape in shapeLists) {
      const index = parseInt(shape);
      if (index >= 0 && index < 3) {
        first.push(shapeLists[index]);
      } else {
        last.push(shapeLists[index]);
      }
    }
    result = last;
    for (let shape of first) {
      result.push(shape);
    }
    setShape(result);
  };

  return (
    <div className="layoutData">
      <Row gutter={[16, 16]} justify="center" className="btn-row">
        <Col>
          <Button className="btnShape" onClick={() => moveShape("left")}>
            <div className="shape leftShape"></div>
            <div className="decsBtn">
              <span className="descSpan">{t("shapeBtn")}</span>
            </div>
          </Button>
        </Col>
        <Col>
          <Button className="btnShape" onClick={() => movePosition()}>
            <Row gutter={16}>
              <Col>
                <div className="shape upShape"></div>
              </Col>
              <Col>
                <div className="shape downShape"></div>
              </Col>
            </Row>
            <div className="decsBtn">
              <span className="descSpan">{t("positionBtn")}</span>
            </div>
          </Button>
        </Col>
        <Col>
          <Button className="btnShape" onClick={() => moveShape("right")}>
            <div className="shape rightShape"></div>
            <div className="decsBtn">
              <span className="descSpan">{t("shapeBtn")}</span>
            </div>
          </Button>
        </Col>
      </Row>
      <Divider className="divider" />
      <Row justify="end" gutter={[16, 16]}>
        {shapeElement()}
      </Row>
    </div>
  );
}

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import type { DatePickerProps } from "antd";
import {
  Card,
  Button,
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
  Row,
  Col,
} from "antd";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import nationality from "./nationality.json";
import countryCode from "./countryCode.json";

// import type { RootState } from '../../app/stores'
// import { useSelector, useDispatch } from 'react-redux'
// import { addData } from './formDataSlice'
// import type { FormInstance } from 'antd/es/form';

const dateFormat = "DD/MM/YYYY";

export default function FormData() {
  let { lang } = useParams();
  const { i18n, t } = useTranslation();
  i18n.changeLanguage(lang);

  return (
    <Card>
      <Form name="FormData" layout="inline" style={{ maxWidth: "none" }}>
        <Form.Item
          label={t("title")}
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Select
            placeholder={t("title")}
            allowClear
            options={[
              { value: "Mr", label: t("mister") },
              { value: "Ms", label: t("miss") },
              { value: "Mrs", label: t("mistress") },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item
          label={t("firstname")}
          name="firstname"
          rules={[{ required: true, message: "Please input your firstname!" }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label={t("lastname")}
          name="lastname"
          rules={[{ required: true, message: "Please input your lastname!" }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label={t("birthday")}
          name="birthday"
          rules={[{ required: true, message: "Please input your birthday!" }]}
        >
          <DatePicker
            defaultValue={dayjs("01/01/2023", dateFormat)}
            format={dateFormat}
          />
        </Form.Item>
        <Form.Item
          label={t("nationality")}
          name="nationality"
          rules={[
            { required: true, message: "Please input your nationality!" },
          ]}
        >
          <Select
            placeholder={t("nationality")}
            allowClear
            options={nationality}
          ></Select>
        </Form.Item>
        <Form.Item label={t("idcard")} name="idcard">
          <Row>
            <Col>
              <Input></Input>
            </Col>
            <Col>
              <span> - </span>
            </Col>
            <Col>
              <Input></Input>
            </Col>
            <Col>
              <span> - </span>
            </Col>
            <Col>
              <Input></Input>
            </Col>
            <Col>
              <span> - </span>
            </Col>
            <Col>
              <Input></Input>
            </Col>
            <Col>
              <span> - </span>
            </Col>
            <Col>
              <Input></Input>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          label={t("gender")}
          name="gender"
          rules={[{ required: true, message: "Please input your gender!" }]}
        >
          <Radio.Group>
            <Radio value={"male"}>{t("male")}</Radio>
            <Radio value={"female"}>{t("female")}</Radio>
            <Radio value={"not specified"}>{t("genderless")}</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label={t("phonenumber")}
          name="phonenumber"
          rules={[{ required: true, message: "Please input your mobile!" }]}
        >
          <Row>
            <Col>
              <Select allowClear options={countryCode}></Select>
            </Col>
            <Col>
              <span> - </span>
            </Col>
            <Col>
              <Input></Input>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label={t("passport")} name="passport">
          <Input></Input>
        </Form.Item>
        <Form.Item
          label={t("salary")}
          name="salary"
          rules={[
            { required: true, message: "Please input your expect salary!" },
          ]}
        >
          <Input></Input>
        </Form.Item>
      </Form>
    </Card>
  );
}

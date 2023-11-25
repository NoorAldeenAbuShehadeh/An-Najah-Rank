import React, { useEffect, useRef, useState } from "react";
import useStyles from "./style";
import { Col, Container, Row } from "react-bootstrap";
import CodeTextArea from "./CodeTextArea";
import TabsSimilarity from "./TabsSimilarity";
import GeneralInfoCodeSimilarity from "./GeneralInfoCodeSimilarity";
import Text from "../Text";
import axios from "axios";
const CodeSimilarity = () => {
  const classes = useStyles();
  const [leftUser, setLeftUser] = useState([
    {
      eventKey: "tab-0",
      title: null,
      TabComponent: null,
    },
  ]);
  const [rightUsers, setRightUsers] = useState([
    {
      eventKey: "tab-0",
      title: null,
      TabComponent: null,
    },
  ]);
  const [rightIndex, setRightIndex] = useState(0);
  const [leftUserData, setLeftUserData] = useState();
  const [loadData, setLoadData] = useState(false);

  const i = useRef(0);
  const range = [["1-2"], ["2-3"], ["3-4"], ["4-5"], ["5-6"], ["6-7"], ["7-8"]];
  useEffect(() => {
    if (loadData) {
      // console.log(leftUserData.mathchs[rightIndex]);
      // console.log(rightIndex);
      setLeftUser([
        {
          eventKey: leftUserData.eventKey,
          title: leftUserData.title,
          //leftUserData.mathchs[rightIndex]
          TabComponent: (
            <CodeTextArea text={leftUserData.code} range={range[rightIndex]} />
          ),
        },
      ]);
    }
  }, [rightIndex, leftUserData, loadData]);
  console.log("--> ", leftUser);
  useEffect(() => {
    axios
      .get("/userSimilarity", {
        params: {
          contestId: 67,
          challengeId: 30,
          userId: 11923929,
        },
      })
      .then((response) => {
        console.log(response.data);

        setLeftUserData({
          eventKey: "tab-0",
          title: response.data.fileName + ` (${response.data.similarity}%)`,
          code: response.data.code,
          mathchs: response.data.SimilarFiles.map((item) =>
            item.linesMatch.map((item2) => item2.f1Lines)
          ),
        });
        setLoadData(true);

        setRightUsers(
          response.data.SimilarFiles.map((item, index) => {
            return {
              eventKey: "tab-" + index,
              title: item.similarFileName + ` (${item.similarPercentage})`,
              TabComponent: (
                <CodeTextArea
                  text={item.code}
                  key={index}
                  range={item.linesMatch.map((item2) => item2.f2Lines)}
                />
              ),
            };
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container fluid className={classes.Container}>
      <Row className={classes.RowCont}>
        <Col className={`${classes.Col} ${classes.ColCenter}`}>
          <Text
            text={"Code Similarity Summary"}
            fontFamily="Open Sans"
            size="26px"
            wegiht="600"
          />
        </Col>
      </Row>
      <Row className={classes.RowCont}>
        <Col className={classes.Col}>
          <GeneralInfoCodeSimilarity />
        </Col>
      </Row>
      <Row className={classes.Row}>
        <Col className={`${classes.Col} ${classes.MyCode}`}>
          <TabsSimilarity ListTabs={leftUser} PaddingTop="0" />
        </Col>
        <Col className={`${classes.Col} ${classes.SimilarCodes}`}>
          <TabsSimilarity
            ListTabs={rightUsers}
            PaddingTop="0"
            setRightIndex={setRightIndex}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CodeSimilarity;
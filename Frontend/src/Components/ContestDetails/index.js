import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import useStyle from "./style";
import Text from "../Text";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import TextEditor from "../TextEditor";
import ButtonRank from "../ButtonRank";
import AlertComponent from "../Alert";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import moment from "moment";
import SuggestionsInput from "../SuggestionsInput";
import InputFiledRank from "../InputFiledRank";
import CheckRank from "../CheckRank";
import LoaderRank from "../LoaderRank";

const ContestsDetalis = ({ operation, data = null }) => {
  const classes = useStyle();
  const navigate = useNavigate();
  const { id, contestId } = useParams();
  const [cookies, setCookies] = useCookies();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    name: null,
    description: null,
    startTime: null,
    hasEndTime: true,
    endTime: null,
  });
  const [errorMsg, setErrorMsg] = useState({
    name: null,
    description: null,
    startTime: null,
    hasEndTime: true,
    endTime: null,
  });
  useEffect(() => {
    if (data) setDetails(data);
  }, [data]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState({
    message: "",
    variant: "warning",
  });
  console.log(details);
  const handleChange = (e, nameVal = null, val = null) => {
    if (e) {
      const { name, value, type, checked, files } = e.target;
      const newValue =
        type === "checkbox" ? checked : type === "file" ? files[0] : value;
      setDetails({ ...details, [name]: newValue });
    } else {
      setDetails({ ...details, [nameVal]: val });
    }
  };
  const handleClick = async () => {
    setShowAlert(false);
    let thereError = false;
    const contest = {
      ...details,
      hasEndTime: !details.hasEndTime,
      startTime: moment(details.startTime).format("YYYY-MM-DD HH:mm:ss"),
      endTime: details.endTime
        ? moment(details.endTime).format("YYYY-MM-DD HH:mm:ss")
        : null,
      token: cookies?.token,
    };
    try {
      if (!details.name) {
        throw new Error("should enter context name");
      } else if (!details.startTime) {
        throw new Error("should enter start time");
      }
    } catch (error) {
      setAlertData({ message: error.message, variant: "warning" });
      setShowAlert(true);
      thereError = true;
    }
    if (!thereError) {
      try {
        if (operation === "create") {
          const response = await Axios.post("http://localhost:5000/contests", {
            ...contest,
            courseNumber: id,
          });
          const params = new URLSearchParams({ ...contest, courseNumber: id });
          const res = await Axios.get(
            "http://localhost:5000/contest_id?" + params.toString()
          );
          navigate(
            `/administration/courses/${id}/contests/${res?.data?.message}/challenges`
          );
        } else {
          const response = await Axios.put(
            `http://localhost:5000/contests/${contestId}`,
            contest
          );
          navigate(
            `/administration/courses/${id}/contests/${contestId}/challenges`
          );
        }
      } catch (error) {
        setAlertData({
          message: error?.response?.data?.message,
          variant: "danger",
        });
        setShowAlert(true);
      }
    }
  };
  return (
    <Container fluid className={classes.Container}>
      <Row className="mt-3 mb-3">
        <Col>
          <Text
            text={"Contest Details"}
            size={"26px"}
            wegiht="600"
            fontFamily={"OpenSans"}
            color={"#39424e"}
          />
        </Col>
      </Row>
      <Row className="mb-3 mt-5">
        <Col xs={"auto"} className={classes.TitleFiled}>
          <Text
            fontFamily="Open Sans"
            text={"Contest Name"}
            height={"40px"}
            wegiht={"600"}
          />
        </Col>
        <Col className={classes.ColInputFiled}>
          <InputFiledRank
            type="text"
            name="name"
            onChange={handleChange}
            value={details.name}
            size={"sm"}
            disabled={loading}
            msg={errorMsg.name}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={"auto"} className={classes.TitleFiled}>
          <Text
            fontFamily="Open Sans"
            text={"Start Time"}
            height={"40px"}
            wegiht={"600"}
          />
        </Col>
        <Col className={classes.ColInputFiled}>
          <InputFiledRank
            type="datetime-local"
            onChange={(e) => handleChange(null, "startTime", e.target.value)}
            value={details.startTime}
            disabled={loading}
            size={"sm"}
            msg={errorMsg.startTime}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={"auto"} className={classes.TitleFiled}>
          <Text
            fontFamily="Open Sans"
            text={"End Time"}
            height={"40px"}
            wegiht={"600"}
          />
        </Col>
        <Col className={classes.ColInputFiled}>
          <InputFiledRank
            type="datetime-local"
            onChange={(e) => handleChange(null, "endTime", e.target.value)}
            value={details.hasEndTime ? details.endTime : null}
            disabled={loading || details.hasEndTime ? false : true}
            size={"sm"}
            msg={errorMsg.endTime}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={"auto"} className={classes.TitleFiled}></Col>
        <Col className={`${classes.ColInputFiled} ml-4`}>
          <CheckRank
            type={"checkbox"}
            label={`This contest has end time.`}
            name="hasEndTime"
            checked={details.hasEndTime}
            onChange={handleChange}
            disabled={loading}
          />
        </Col>
      </Row>

      {/*  */}
      <Row className="mb-3">
        <Col xs={"auto"} className={classes.TitleFiled}>
          <Text
            fontFamily="Open Sans"
            text={"Description"}
            height={"40px"}
            wegiht={"600"}
          />
        </Col>
        <Col className={classes.ColInputFiled}>
          <TextEditor
            name={"description"}
            text={details.description}
            handleChange={handleChange}
          />
        </Col>
      </Row>
      {loading && (
        <Row>
          <Col xs={"auto"} className={classes.Loaderspace}></Col>
          <Col className={classes.Loader}>
            <LoaderRank loading={loading} />
          </Col>
        </Row>
      )}
      <Row className="mt-5 mb-3">
        <Col Col xs={"auto"} className={classes.TitleFiled}></Col>
        <Col className={classes.ActionBtns}>
          <ButtonRank
            text={"Cancel Changes"}
            onClick={() =>
              navigate("/administration/courses/" + id + "/contests")
            }
            disabled={loading}
          />
          <ButtonRank
            text={"Save Changes"}
            onClick={handleClick}
            disabled={loading}
          />
        </Col>
      </Row>
      {/*  */}

      {/* <Row>
        <Col md={2}></Col>
        <Col md={8}>
          {showAlert && (
            <AlertComponent
              message={alertData.message}
              variant={alertData.variant}
            />
          )}
        </Col>
      </Row> */}

      {/* <Row className="mb-3">
        <Col className={classes.ButtonSelect}>
          <ButtonRank
            text={"Save Changes"}
            backgroundColor="rgb(46, 200, 102)"
            color="#fff"
            onClick={handleClick}
          />
        </Col>
      </Row> */}
    </Container>
  );
};

export default ContestsDetalis;

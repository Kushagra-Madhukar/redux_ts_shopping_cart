import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useHistory, useRouteMatch } from "react-router";
import { Container, TextField } from "@material-ui/core";
import FormImg from '../../img/profilesample.png'
import styled from 'styled-components'

const useStyles = makeStyles({
  root: {
    gridRow: 'span 1',
    gridColumn: 'span 1',
    width: 250,
    height: 230,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  Button: {
    cursor: "pointer",
    width: "100%",
    height: "100%",
  },
  main: {
    height: 190,
    cursor: "pointer",
  },
  navs: {
    height: 40,
  },
  floating: {
    position: 'fixed',
    zIndex: 2,
    height: '100vh',
    width: '100vw',
    maxWidth: '100vw',
    backgroundColor: 'rgba(0,0,0,0.9)',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridElement: {
    gridRow: 'span 1',
    gridColumn: 'span 1',
    width: 300,
    height: 270,
  }
});

const SurveyHolder = styled.div`
  display: flex;
  flex-direction: column;
  height: 170px;
  width: 180px;
  justify-content: space-between;
`
const SurveyForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1em;
  width: 180px;
  height: 140px;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 5px;
  cursor: pointer;
`
const FormVertical = styled.div`
  display: flex;
  height: 80px;
  width: 5px;
  position: absolute;
  margin: 0 auto;
  background-color: ${props => props.theme.secondary};
  border-radius: 2.5px;
`
const FormHorizontal = styled.div`
  display: flex;
  height: 5px;
  width: 80px;
  margin: 0 auto;
  top: calc(50% - 2.5px);
  right: 0;
  left: 0;
  background-color: ${props => props.theme.secondary};
  border-radius: 2.5px;
  position: absolute;
`
const SurveyText = styled.p`
  font-size: 0.9rem;
  font-weight: $medium;
`
const SurveycardHolder = styled.div`
  grid-row: span 1;
  grid-column: span 1;
  width: 250px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`
const SurveycardImage = styled.img`
  display: block;
  width: 100%;
  height: 170px;
  margin: 0;
  padding: 0;
  object-fit: cover;
  border-radius: 5px;
`
const SurveycardInfo = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  padding: 0.8em;
  flex-direction: column;
`
const BigText = styled.p`
  font-size: 1rem;
  display: flex;
  margin-bottom: 0.2rem;
`
const SmallText = styled.p`
  font-size: 0.65rem;
  display: flex;
`
type SurveyType = {
  formId?: string | null
  formTitle?: string
  setModified: React.Dispatch<React.SetStateAction<boolean>>
  dateUpdated?: string
}
export default function SurveyCard({ formId, formTitle, setModified, dateUpdated }: SurveyType) {
  const curUrl = useRouteMatch();
  const classes = useStyles();
  const [create, setCreate] = useState(false);
  const [title, setTitle] = useState("");
  const history = useHistory();

  const createFormHandler = async () => {
    let newForm = await axios.post(`${process.env.REACT_APP_PRODUCTION}/create/forms`, {
      title: title,
    });
    //If successful then store the created form id and push it in the nav bar
    const data = newForm.data.rows[0];
    history.push(`${curUrl.url}/${data.form_id}`);
  };

  const deleteFormHandler = async () => {
    let form = await axios.delete(`${process.env.REACT_APP_PRODUCTION}/create/forms/${formId}`);
    setModified(modified => !modified)
    console.log(form);
  };

  if (formId === null) {
    return (
      <div>
        {/* <Card className={classes.root} onClick={() => setCreate(true)}>
          <AddBoxOutlinedIcon className={classes.Button} />
        </Card> */}
        <SurveyHolder>
          <SurveyForm onClick={() => setCreate(true)}>
            <FormVertical/>
            <FormHorizontal/>
          </SurveyForm>
          <SurveyText>Start New Survey</SurveyText>
        </SurveyHolder>
        {create ? (
        <Container className={classes.floating}>
          <Card 
          // className={classes.floatingCard}
          >
                <CardContent>          
                <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required={true}
                    placeholder="Enter the title of your form"
                />
                </CardContent>
              <CardActions>
                <Button
                    disabled={title === ""}
                    onClick={createFormHandler}
                    variant="contained"
                    color="primary"
                >
                    Create the form
                </Button>
                <Button
                    onClick={() => setCreate(false)}
                    variant="contained"
                    color="primary"
                >
                    Cancel
                </Button>
              </CardActions>
          </Card>
        </Container>
        ) : null}
      </div>
    );
  } else {
    return (
      // <div className={classes.gridElement}>
      <SurveycardHolder onClick={() => history.push(`${curUrl.url}/${formId}`)}>
          <SurveycardImage src={FormImg}/>
          <SurveycardInfo>
            {/* <Button size="small" color="primary" onClick={deleteFormHandler}>
              Delete
            </Button> */}
            <div style={{margin: 'auto 0'}}>
              <BigText>{formTitle}</BigText>
              <SmallText>Opened on - {dateUpdated}</SmallText>
            </div>
          </SurveycardInfo>
      </SurveycardHolder>
    );
  }
}

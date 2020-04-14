import React, { FC, useEffect } from 'react';
import { Page } from '../Components/Page';
import { Form, required, minLength, Values, SubmitResult } from './Form';
import { Field } from '../Components/Field';
import { PostQuestionData, QuestionData } from '../MockData/QuestionsData';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  postQuestionActionCreator,
  AppState,
  clearPostedQuestionActionCreator,
} from './Store';
import { AnyAction } from 'redux';

interface Props {
  postQuestion: (question: PostQuestionData) => Promise<void>;
  postedQuestionResult?: QuestionData;
  clearPostedQuestion: () => void;
}
const AskPage: FC<Props> = ({
  postQuestion,
  postedQuestionResult,
  clearPostedQuestion,
}) => {
  const handleSubmit = (values: Values) => {
    postQuestion({
      title: values.title,
      content: values.content,
      userName: 'Fred',
      created: new Date(),
    });
  };
  let submitResult: SubmitResult | undefined;
  if (postedQuestionResult) {
    submitResult = { success: postedQuestionResult !== undefined };
  }
  useEffect(() => {
    return function cleanUp() {
      clearPostedQuestion();
    };
  }, [clearPostedQuestion]);
  return (
    <Page title="Ask a Question">
      <Form
        submitCaption="Submit Your Question"
        validationRules={{
          title: [{ validator: required }, { validator: minLength, arg: 10 }],
          pass: [{ validator: required }, { validator: minLength, arg: 5 }],
          content: [{ validator: required }, { validator: minLength, arg: 50 }],
        }}
        onSubmit={handleSubmit}
        submitResult={submitResult}
        failureMessage="There was a problem with your question"
        successMessage="Your question was successfully submitted"
      >
        <Field name="title" label="Title" type="Text" />
        <Field name="pass" label="tittle" type="Password" />
        <Field name="content" label="Content" type="TextArea" />
      </Form>
    </Page>
  );
};
const mapStateToProps = (store: AppState) => {
  return {
    postedQuestionResult: store.questions.postedResult,
  };
};
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    postQuestion: (question: PostQuestionData) =>
      dispatch(postQuestionActionCreator(question)),
    clearPostedQuestion: () => dispatch(clearPostedQuestionActionCreator()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AskPage);

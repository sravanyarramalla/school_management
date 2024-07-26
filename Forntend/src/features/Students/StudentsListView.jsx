import styled from "styled-components";

const CardContainer1 = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3%;
  padding: 0px;
  text-align: center;
  display: flex;
  width: 100%;
  padding-left: 4%;
  margin-left: 0%;
  margin-top: 25%;
`;
const HeadingContainer = styled.h1`
  margin-top: 2%;
  font-size: 2rem;
  color: blue;
  font-weight: 400;
`;

const Div = styled.div`
  margin-top: 2%;
  margin-left: 59%;
  display: flex;
`;
const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 16px;
  margin-top: 4%;
  color: var(--color-primary);
`;

const AddTeacherLink = styled.a`
  font-size: 1.5rem;
  color: var(--color-brand-500);
  text-decoration: none;
  margin-bottom: 16px;
  margin-top: 4%;
  margin-left: 5%;
  width: 12rem;
  border-radius: 4px;
`;
const FormContainer = styled.form`
  display: flex;
  margin-top: 0;
  margin-right: 100%;
`;

const ListLink = styled.a`
  font-size: 1.5rem;
  color: var(--color-grey-0);
  background-color: var(--color-brand-500);
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 3rem;
  border-radius: 4px;

  &:hover {
    background-color: var(--color-brand-500);
    color: var(--color-white);
  }
`;
const GridLink = styled.a`
  font-size: 1.5rem;
  color: var(--color-brand-500);
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 3rem;
  border-radius: 4px;
`;

function StudentsListView() {
  return (
    <div>
      <CardContainer1>
        <HeadingContainer>All Students</HeadingContainer>
        <Div>
          <Heading>Students</Heading>
          <AddTeacherLink href="allstudents">All Students</AddTeacherLink>
        </Div>
      </CardContainer1>
      <FormContainer>
        <ListLink href="allstudents">List View</ListLink>
        <GridLink href="gridview">Grid View</GridLink>
      </FormContainer>
    </div>
  );
}

export default StudentsListView;

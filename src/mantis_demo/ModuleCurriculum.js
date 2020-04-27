import React, { useEffect } from 'react'
import styled from 'styled-components'
import { gray } from '@vschool/lotus'
import { withRouter } from 'react-router-dom'
const testData = [
    {
        sectionHeader: "CSS 1",
        assignments: [
            {
                title: 'Box Model Review',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Responsive Design',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Responsive Color Grid From Scratch',
                topic: 'Assignment',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Flexbox Part One',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Flexbox Part Two',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Business Time',
                topic: 'Assignment',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Grid Part One',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Grid Part Two',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Grid Part Three',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'CSS Grid Practice',
                topic: 'Assignment',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            }
        ]
    },{
        sectionHeader: "JS 1",
        assignments: [
            {
                title: 'Arrays Review',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Loops Review',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Arrays + Loops',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Nested Loops',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Array Methods',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Array Methods Exercise',
                topic: 'Assignment',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Forception',
                topic: 'Assignment',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'String Methods',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'String Methods Exerrcise',
                topic: 'Assignment',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Mutability and Value Types',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Constructor Function',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'Employee Records',
                topic: 'Assignment',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'ES6 Part One',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            },{
                title: 'ES6 Part Two',
                topic: 'Lecture',
                status: 'UNLOCKED',
                mainLink: 'google.com',
                resources: ['google.com/1', 'google.com/2']
            }
        ]
    }
]

export default withRouter(props => {
    const modNum = props.location.pathname[8]
    const title = modNum === '0' ? 'Module 0: Basics of Coding' : modNum === '1' ? 'Module 1: Basics of Web Development' : modNum === '2' ? 'Module 2: Vanilla Web Development' : modNum === '3' ? 'Module 3: Intro to React' : modNum === '4' ? 'Module 4: Special Topics' : modNum === '5' ? 'Module 5: Backend Basics' : modNum === '6' ? 'Module 6: User Auth' : 'Something went wrong, sorry... not sorry'
    const mappedModule = testData.map(section => {
    useEffect(() => window.scrollTo(0, 0), [modNum])
        return (
            <React.Fragment key={section.sectionHeader}>
                <SectionHeader>Section: {section.sectionHeader}</SectionHeader>
                <AssignmentContainer>
                    <AssignmentHeader>ASSIGNMENT</AssignmentHeader>
                    <AssignmentHeader>TOPIC</AssignmentHeader>
                    <AssignmentHeader>STATUS</AssignmentHeader>
                    { section.assignments.map( assignment => (
                        <React.Fragment key={assignment.title}>
                            <AssignmentTag>{assignment.title}</AssignmentTag>
                            <AssignmentTag style={{opacity: '.7'}}>{assignment.topic}</AssignmentTag>
                            <AssignmentStatus><StyledI></StyledI>{assignment.status}</AssignmentStatus>
                        </React.Fragment>
                    )) }
                </AssignmentContainer>
            </React.Fragment>
        )
    })
    return (
        <>
            <ContentHeader>{ title }</ContentHeader>
            { mappedModule }

        </>
    )
})

const ContentHeader = styled.header`
    font-size: 28pt;
    font-weight: bold;
    color: ${gray.darkest};
    margin-top: 100pt;
    margin-bottom: 59pt;
    padding-top: 100pt;
`
const SectionHeader = styled.h4`
    font-size: 16pt;
    font-weight: 600;
    margin-top: 20pt;
    margin-bottom: 5pt;
`
const AssignmentContainer = styled.div`
    background: #FFF;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-auto-rows: 40pt;
    align-items: center;
    border: solid 1pt rgba(0,0,0,.2);
    border-radius 2pt;
    padding: 16pt;
    padding-top: 0;
`
const AssignmentHeader = styled.p`
    font-size: 9pt;
    margin: 0;
    padding: 10pt;
    letter-spacing: 1pt;
    border-bottom: solid 1pt rgba(0,0,0,.1);
    color: #514F4B;
    opacity: .8;
    font-weight: bold;
`
const AssignmentTag = styled.p`
    font-size: 12pt;
    margin: 0;
    padding: 10pt;
    border-bottom: solid 1pt rgba(0,0,0,.1);
`
const AssignmentStatus = styled.div`
    background: #E3EEF5;
    display: flex;
    padding: 7pt;
    padding-right: 10pt;
    padding-left: 0pt;
    border-radius: 30pt;
    width: 80pt;
    font-size: 10pt;
`   
const StyledI = styled.i`
    display: inline-block;
    background: #456AE2;
    height: 5pt;
    width: 5pt;
    border-radius: 100%;
    padding: 0;
    margin: 1pt 10pt;
`
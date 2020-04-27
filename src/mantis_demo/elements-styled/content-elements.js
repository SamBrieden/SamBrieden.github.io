import styled from 'styled-components'
import { gray } from '@vschool/lotus'

export const ContentHeader = styled.header`
    font-size: 28pt;
    font-weight: bold;
    color: ${gray.darkest};
    margin-top: 100pt;
    margin-bottom: 59pt;
    padding-top: 100pt;
`
export const SectionHeader = styled.h4`
    font-size: 16pt;
    font-weight: 600;
    margin-top: 20pt;
    margin-bottom: 5pt;
`
export const AssignmentContainer = styled.div`
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
export const AssignmentHeader = styled.p`
    font-size: 9pt;
    margin: 0;
    padding: 10pt;
    letter-spacing: 1pt;
    border-bottom: solid 1pt rgba(0,0,0,.1);
    color: #514F4B;
    opacity: .8;
    font-weight: bold;
`
export const AssignmentTag = styled.p`
    font-size: 12pt;
    margin: 0;
    padding: 10pt;
    border-bottom: solid 1pt rgba(0,0,0,.1);
`
export const AssignmentStatus = styled.div`
    background: #E3EEF5;
    padding: 7pt;
    padding-right: 10pt;
    padding-left: 0pt;
    border-radius: 30pt;
    width: 80pt;
    font-size: 10pt;
`   
export const StyledI = styled.i`
    display: inline-block;
    background: #456AE2;
    height: 5pt;
    width: 5pt;
    border-radius: 100%;
    padding: 0;
    margin: 1pt 10pt;
`
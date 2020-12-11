import React from 'react';
import UU from '../uu.png';

export default function About(props) {
    return(
        <div className="articles">
      <table>
        <tr>
        <td className='pp'><img className='profile-picture' src= {UU} alt='profile-picture' /></td>
        <td className='about'>My name is Utkarsh Upendra. I am an Electrical Engineering graduate from National Institute of Technology, Rourkela. I have been working as a software engineer with Optum since July'2017 and have been involved in taking on challenges within the US Healthcare. Technology for me is more of a passion than a profession. My fields of interest include Distributed Systems, Data Engineering, Cognitive Sciences and Quantum Computing.</td>
        </tr>
      </table>
      </div>
    )
}
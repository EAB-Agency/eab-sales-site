import React from 'react'
import { Link } from 'gatsby'

export default function AltNav({ children }) {
    return (
        <ul className="no-list">
            <li>
                <a href="" className="button wire-button">Apply Now</a>
            </li>
            <li>
                <a href="" className="button">College of Health Sciences</a>
            </li>
            <li>
                <a href="" className="button">Related Programs</a>
            </li>
            <li>
                <a href="" className="button">Contact Us</a>
            </li>
            {children}
        </ul>
    )
}

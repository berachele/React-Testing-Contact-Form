import React from "react"
import { render } from "@testing-library/react"
import ContactForm from "./ContactForm"

test("testing if 'First Name' appears in DOM", () => {
    const {getByText} = render(<ContactForm/>);

    const findName = getByText(/first name/i);
    expect(findName).toBeInTheDocument();
})
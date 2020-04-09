import React from "react"
import { render, fireEvent } from "@testing-library/react"
import ContactForm from "./ContactForm"

//easy test--AAA--> ARRANGE ~ ACT ~ ASSERT
test("Testing if 'First Name' appears in DOM", () => {
    const {getByText} = render(<ContactForm/>);
//no action, assert -->
    const findName = getByText(/first name/i);
    expect(findName).toBeInTheDocument();
})

test("Testing if inputs are visible", () => {
    const {getByLabelText} = render(<ContactForm/>)
//no action--> assert
    getByLabelText(/first Name/i); //getByLabelText exception
    getByLabelText(/last Name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
})

test("Testing if Submitting button renders information", () => {
    const {getByLabelText, getByText, getByTestId} = render(<ContactForm/>)

    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last Name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    //action--> adding text to each input
    fireEvent.change(firstNameInput, {target: {value: "Sam"}})
    fireEvent.change(lastNameInput, {target: {value: "Edwards"}})
    fireEvent.change(emailInput, {target: {value: "thundrchikn@gmail.com"}})
    fireEvent.change(messageInput, {target: {value: "Hello there."}})

    //asserting our text is correct
    expect(firstNameInput.value).toBe("Sam")
    expect(lastNameInput.value).toBe("Edwards")
    expect(emailInput.value).toBe("thundrchikn@gmail.com")
    expect(messageInput.value).toBe("Hello there")
})
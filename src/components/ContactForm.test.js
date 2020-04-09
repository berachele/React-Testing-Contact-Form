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
    act(() => {const {getByTestId} = render(<ContactForm />)
    // const {getByTestId} = render(<ContactForm/>)

    const firstNameInput = getByTestId(/first/i);
    const lastNameInput = getByTestId(/last/i);
    const emailInput = getByTestId(/email/i);
    const messageInput = getByTestId(/message/i);

    //action 1--> adding text to each input
    fireEvent.change(firstNameInput, {target: {value: "Sam"}});
    fireEvent.change(lastNameInput, {target: {value: "Edwards"}});
    fireEvent.change(emailInput, {target: {value: "thundrchikn@gmail.com"}});
    fireEvent.change(messageInput, {target: {value: "Hello there"}});

    //asserting our text is correct
    expect(firstNameInput.value).toBe("Sam");
    expect(lastNameInput.value).toBe("Edwards");
    expect(emailInput.value).toBe("thundrchikn@gmail.com");
    expect(messageInput.value).toBe("Hello there");

    //action 2--> click on button
    fireEvent.click(getByTestId(/submit/i));

    //assert that theres data listed--currently not working
    const showsData = await findByTestId(/data/i);
    expect(showsData).toBeInTheDocument();
})

// test("Testing you can fully type a person's name", () => {
//     const {getByTestId} = render(<ContactForm/>);

//     const typeFirstName = getByTestId("first");

//     fireEvent.change(typeFirstName, {target: {value: "Rachele"}});
//     fireEvent.keyPress()
//     //expecting for an error to not show up, but that's a 
//     expect()
    
    
// })
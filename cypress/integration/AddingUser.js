/* global cy */

describe("Adding users", () => {
	it("Should add a user to the users table", () => {
		cy.visit("/")
		const firstName = "someone"
		const lastName = "something"
		const email = "something"

		cy.findByTestId("fab-button").click()
		cy.findByTestId("firstName-textField").type(firstName)
		cy.findByTestId("lastName-textField").type(lastName)
		cy.findByTestId("email-textField").type(email)
		cy.findByTestId("add").click()
		cy.findByTestId("name-tableCell").should(
			"contain",
			firstName + " " + lastName
		)
		cy.findByTestId("email-tableCell").should("contain", email)
	})
})

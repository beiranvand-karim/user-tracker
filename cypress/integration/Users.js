describe("Adding and deleting users", () => {
	it("Should add a first user", () => {
		cy.visit("/")

		const firstName = "someone"
		const lastName = "something"
		const email = "something"

		const NO_USER = "No user ! click on the button below to add a user"
		cy.findByTestId("empty-usersList").should("contain", NO_USER)
		cy.findByTestId("fab-button-empty-list").click()

		cy.findByTestId("id").then(($element) => {
			cy.findByTestId("firstName-textField").type(firstName)
			cy.findByTestId("lastName-textField").type(lastName)
			cy.findByTestId("email-textField").type(email)

			const userId = $element.get(0).getAttribute("data-id")

			cy.findByTestId("add").click()

			cy.findByTestId(`name-tableCell-${userId}`).should(
				"contain",
				firstName + " " + lastName
			)
			cy.findByTestId(`email-tableCell-${userId}`).should("contain", email)
		})
	})

	it("Should add a user to the users table", () => {
		cy.visit("/")

		const firstName = "someone"
		const lastName = "something"
		const email = "something"

		cy.findByTestId("fab-button-empty-list").click()

		cy.findByTestId("id").then(($element) => {
			cy.findByTestId("firstName-textField").type(firstName)
			cy.findByTestId("lastName-textField").type(lastName)
			cy.findByTestId("email-textField").type(email)

			const userId = $element.get(0).getAttribute("data-id")

			cy.findByTestId("add").click()

			cy.findByTestId(`name-tableCell-${userId}`).should(
				"contain",
				firstName + " " + lastName
			)
			cy.findByTestId(`email-tableCell-${userId}`).should("contain", email)
		})

		cy.findByTestId("fab-button").click()

		cy.findByTestId("id").then(($element) => {
			cy.findByTestId("firstName-textField").type(firstName)
			cy.findByTestId("lastName-textField").type(lastName)
			cy.findByTestId("email-textField").type(email)

			const userId = $element.get(0).getAttribute("data-id")

			cy.findByTestId("add").click()

			cy.findByTestId(`name-tableCell-${userId}`).should(
				"contain",
				firstName + " " + lastName
			)
			cy.findByTestId(`email-tableCell-${userId}`).should("contain", email)
		})
	})
	it("should delete a user", () => {
		cy.visit("/")
		const firstName = "someone"
		const lastName = "something"
		const email = "something"

		const NO_USER = "No user ! click on the button below to add a user"

		cy.findByTestId("fab-button-empty-list").click()

		cy.findByTestId("id").then(($element) => {
			cy.findByTestId("firstName-textField").type(firstName)
			cy.findByTestId("lastName-textField").type(lastName)
			cy.findByTestId("email-textField").type(email)

			const userId = $element.get(0).getAttribute("data-id")

			cy.findByTestId("add").click()
			cy.findByTestId(`name-tableCell-${userId}`).should(
				"contain",
				firstName + " " + lastName
			)
			cy.findByTestId(`email-tableCell-${userId}`).should("contain", email)

			cy.findByTestId("delete-dialog").click()
			cy.findByTestId("delete").click()

			cy.findByTestId("empty-usersList").should("contain", NO_USER)
		})
	})
	it("Should validate form", () => {
		cy.visit("/")

		const requiredFieldError = "This field is required"

		cy.findByTestId("fab-button-empty-list").click()
		cy.findByTestId("add").click()

		cy.findByTestId("firstName-formControl").should(
			"contain",
			requiredFieldError
		)
		cy.findByTestId("lastName-formControl").should(
			"contain",
			requiredFieldError
		)
		cy.findByTestId("emailAddress-formControl").should(
			"contain",
			requiredFieldError
		)
	})
})

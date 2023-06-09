import { Page } from "@playwright/test"

export const login = async (page: Page) => {
    await page.goto("/auth/login")
    await page.locator("input#email").fill("test@test.com")
    await page.locator("input#password").fill("password")
    await page.getByRole("button", { name: "Login" }).click()

    // ログイン後は /todo にリダイレクトするため
    await page.waitForURL("/todo")
}

import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { Contacts } from "../pages/Contacts";
import { server } from "../serverTests";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("loading", () => {
  test("loading", async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");

    expect(loader).toBeInTheDocument();
    await waitForElementToBeRemoved(loader);
  });

  test("success", async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");

    await waitForElementToBeRemoved(loader);

    expect(loader).not.toBeInTheDocument();

    expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument();
  });

  test("fail", async () => {
    server.use(
      rest.get("https://randomuser.me/api/?results=10", (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({
            error: "Iternal server error",
          })
        );
      })
    );
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");

    await waitForElementToBeRemoved(loader);

    expect(loader).not.toBeInTheDocument();

    expect(screen.getByTestId("contacts-error")).toBeInTheDocument();
  });
});

describe("contacts data view mode", () => {
  test("should eaqul table", async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");

    await waitForElementToBeRemoved(loader);

    expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-table")).toHaveClass(
      "Mui-selected"
    );

    expect(
      screen.queryByTestId("contacts-grid-container")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-grid")).not.toHaveClass(
      "Mui-selected"
    );
  });

  test("switch from grid to table", async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");

    await waitForElementToBeRemoved(loader);

    const toggleGrid = screen.queryByTestId("toggle-data-view-mode-grid");
    const toggleTable = screen.queryByTestId("toggle-data-view-mode-table");
    userEvent.click(toggleGrid);
    userEvent.click(toggleTable);

    expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-table")).toHaveClass(
      "Mui-selected"
    );

    expect(
      screen.queryByTestId("contacts-grid-container")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-grid")).not.toHaveClass(
      "Mui-selected"
    );
    expect(window.localStorage.getItem("dataViewMode")).toEqual("table");
  });

  test("should eaqul grid", async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");

    await waitForElementToBeRemoved(loader);

    const toggleGrid = screen.queryByTestId("toggle-data-view-mode-grid");
    userEvent.click(toggleGrid);

    expect(screen.getByTestId("contacts-grid-container")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-grid")).toHaveClass(
      "Mui-selected"
    );

    expect(
      screen.queryByTestId("contacts-table-container")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-table")).not.toHaveClass(
      "Mui-selected"
    );
    expect(window.localStorage.getItem("dataViewMode")).toEqual("grid");
  });

  test("should eaqul grid with reload page", async () => {
    window.localStorage.setItem("dataViewMode", "grid");

    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");

    await waitForElementToBeRemoved(loader);

    expect(screen.getByTestId("contacts-grid-container")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-grid")).toHaveClass(
      "Mui-selected"
    );

    expect(
      screen.queryByTestId("contacts-table-container")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-table")).not.toHaveClass(
      "Mui-selected"
    );

    window.localStorage.clear();
  });
});

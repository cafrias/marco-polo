import { vi, describe, test, expect, beforeEach, Mock } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Pagination } from "./pagination";

const labels = {
  page(page: number) {
    return `Go to Page "${page}"`;
  },
  next: "Next Page",
  prev: "Previous Page",
};

describe(Pagination.name, () => {
  let onPageMock: Mock;

  beforeEach(() => {
    onPageMock = vi.fn();
  });

  test("on first page", () => {
    render(<Pagination current={1} onPage={onPageMock} total={10} />);

    const prevButton = screen.queryByRole("button", { name: labels.prev });
    expect(prevButton).toBeNull();

    const currentButton = screen.getByRole("button", {
      name: labels.page(1),
    });
    expect(currentButton.getAttribute("aria-current")).toBe("page");
  });

  test("on the middle", () => {
    render(<Pagination current={25} onPage={onPageMock} total={100} />);

    const prevBtn = screen.getByRole("button", { name: labels.prev });
    const nextBtn = screen.getByRole("button", { name: labels.prev });
    const goToButtons = screen.getAllByRole("button", { name: /go to page/i });

    expect(prevBtn).not.toBeNull();
    expect(nextBtn).not.toBeNull();
    expect(goToButtons.length).toBe(7);
  });

  test("on last page", () => {
    render(<Pagination current={3} onPage={onPageMock} total={3} />);

    const prevBtn = screen.getByRole("button", {
      name: labels.prev,
    });

    expect(prevBtn).not.toBeNull();
  });

  test("clicking on next button", () => {
    render(<Pagination current={1} onPage={onPageMock} total={3} />);

    const nextBtn = screen.getByRole("button", {
      name: labels.next,
    });
    fireEvent.click(nextBtn);

    expect(onPageMock).toHaveBeenCalledWith(2);
  });

  test("clicking on previous button", () => {
    render(<Pagination current={3} onPage={onPageMock} total={4} />);

    const prevBtn = screen.getByRole("button", {
      name: labels.prev,
    });
    fireEvent.click(prevBtn);

    expect(onPageMock).toHaveBeenCalledWith(2);
  });

  test("when no page", () => {
    render(<Pagination current={1} onPage={onPageMock} total={1} />);
    expect(screen.queryByRole("navigation", { name: "pagination" })).toBeNull();
  });
});

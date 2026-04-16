import { expect, test } from "bun:test";
import { VentureCard } from "./venture-card";

const mockVenture = {
  id: "test-venture",
  name: "Test Venture Name",
  oneLiner: "This is a test one-liner.",
  technicalFraming: "Technical details here.",
  businessFraming: "Business details here.",
  maturity: "Test Maturity Level",
  projectHref: "/test-project",
  caseStudyHref: "/test-case-study",
};

test("VentureCard renders correctly with mock data", () => {
  const result = VentureCard({ venture: mockVenture });

  // result is the VNode object returned by our mocked React
  expect(result.type).toBe("article");

  // Helper to find text specifically in children nodes (avoiding other props like className)
  const findTextInChildren = (node: any, text: string): boolean => {
    if (typeof node === "string") return node.includes(text);
    if (Array.isArray(node)) return node.some(n => findTextInChildren(n, text));
    if (node && typeof node === "object") {
      // Check node.props.children if they exist
      if (node.props && node.props.children) {
        return findTextInChildren(node.props.children, text);
      }
      // Check node.children if the mock put them there
      if (node.children) {
        return findTextInChildren(node.children, text);
      }
    }
    return false;
  };

  expect(findTextInChildren(result, mockVenture.name)).toBe(true);
  expect(findTextInChildren(result, mockVenture.oneLiner)).toBe(true);
  expect(findTextInChildren(result, mockVenture.maturity)).toBe(true);
});

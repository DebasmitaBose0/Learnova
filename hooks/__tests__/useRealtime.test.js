import { renderHook, act } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useRealtime } from "../useRealtime";
import { useRealtimeAttendance } from "../useRealtimeAttendance";

const mockUser = {
  uid: "test-user-id",
  getIdToken: () => Promise.resolve("test-token"),
};

// Mock useAuth
vi.mock("@/hooks/useAuth", () => ({
  useAuth: () => ({
    user: mockUser,
  }),
}));

describe("Real-time hooks unsubscribe behavior", () => {
  let mockEventSource;
  const originalEventSource = global.EventSource;

  beforeEach(() => {
    mockEventSource = {
      close: vi.fn(),
      addEventListener: vi.fn(),
      readyState: 0,
    };
    global.EventSource = function () {
      return mockEventSource;
    };
  });

  afterEach(() => {
    global.EventSource = originalEventSource;
  });

  it("useRealtime should transition status and clean up on unsubscribe", async () => {
    const handlers = {
      onNotification: vi.fn(),
      onAttendance: vi.fn(),
    };

    const { result } = renderHook(() => useRealtime(handlers));

    expect(result.current.status).toBe("connecting");
    expect(typeof result.current.unsubscribe).toBe("function");

    // Wait for the async getIdToken and event source connection
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    // Manually trigger onopen to transition to connected status
    act(() => {
      if (mockEventSource.onopen) {
        mockEventSource.onopen();
      }
    });

    expect(result.current.status).toBe("connected");

    act(() => {
      result.current.unsubscribe();
    });

    expect(result.current.status).toBe("disconnected");
    expect(mockEventSource.close).toHaveBeenCalled();
  });

  it("useRealtimeAttendance should return unsubscribe and invoke it correctly", async () => {
    const { result } = renderHook(() => useRealtimeAttendance());

    expect(typeof result.current.unsubscribe).toBe("function");

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    act(() => {
      result.current.unsubscribe();
    });

    expect(mockEventSource.close).toHaveBeenCalled();
  });
});

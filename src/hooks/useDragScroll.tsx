import React from "react";

export const useDragScroll = (): React.RefObject<HTMLDivElement> => {
  const nodeRef = React.useRef<HTMLDivElement>(null);

  const handleMouseDown = React.useCallback((e: MouseEvent) => {
    const node = nodeRef.current;
    if (!node) {
      return;
    }
    const startPos = {
      left: node.scrollLeft,
      top: node.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      node.scrollTop = startPos.top - dy;
      node.scrollLeft = startPos.left - dx;
      updateCursor(node);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      resetCursor(node);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  const handleTouchStart = React.useCallback((e: TouchEvent) => {
    const node = nodeRef.current;
    if (!node) {
      return;
    }
    const touch = e.touches[0];
    const startPos = {
      left: node.scrollLeft,
      top: node.scrollTop,
      x: touch.clientX,
      y: touch.clientY,
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const dx = touch.clientX - startPos.x;
      const dy = touch.clientY - startPos.y;
      node.scrollTop = startPos.top - dy;
      node.scrollLeft = startPos.left - dx;
    };

    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  }, []);

  const updateCursor = (ele: HTMLElement) => {
    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';
  };

  const resetCursor = (ele: HTMLElement) => {
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');
  };

  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node) {
      return;
    }
    node.addEventListener("mousedown", handleMouseDown);
    node.addEventListener("touchstart", handleTouchStart);
    return () => {
      node.removeEventListener("mousedown", handleMouseDown);
      node.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return nodeRef as React.RefObject<HTMLDivElement>;
};
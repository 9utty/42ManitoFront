import React from "react";
import AppLayout from "../global/components/AppLayout";

interface FeedbackProps {
  isMento: boolean;
}

const Feedback = (props: FeedbackProps) => {
  return (
    <AppLayout>
      <div>피드백페이지입니다.</div>
    </AppLayout>
  );
};

export default Feedback;

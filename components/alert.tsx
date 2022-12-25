import Container from "./container";
import cn from "classnames";
import { YOUTUBE_LINK } from "../lib/constants";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          Visit Our Youtube Channel:&nbsp;
          <a href={YOUTUBE_LINK} className="underline">
            Youtube
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Alert;

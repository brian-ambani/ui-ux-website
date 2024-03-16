import Image from "next/image";
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Check from "../../public/assets/check.svg";
import bluebutton from "../../public/assets/blue-button.svg";

export function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px]">
      <div className="flex flex-col">
        <div>
          <h3 className="font-medium text-[#0085FF]">Sales Monitoring</h3>
          <h1 className="font-medium pt-[12px] text-2xl text-[#172026]">
            Simply your sales monitoring
          </h1>
          <Image src={Feature1} alt="feature 1 image" className="pt-[24px]" />
          <p className="py-[20px] text-[#36485C]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird's eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-y-3">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check mark" />
              </span>
              Lorem ipsum dolor sit.
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check mark" />
              </span>
              Lorem ipsum dolor sit.
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check mark" />
              </span>
              Lorem ipsum dolor sit.
            </li>
          </ul>
          <p className="pt-[24px] flex items-center gap-x-2 font-medium text-[#0085FF]">
            Learn more
            <span>
              <Image src={bluebutton} alt="Learn more" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';

import gitHubLogo from '@/assets/github-mark.svg';
import { IGitSession } from '@/common/interfaces';
import {
  Popover,
  PopoverContent,
  PopoverHandler,
  PopoverProps,
  Typography,
} from '@material-tailwind/react';

export default function GitSessionInfoPopover({
  children,
  rateResetTime,
}: PopoverProps & IGitSession) {
  const [openPopover, setOpenPopover] = useState(false);
  const [rateResetsOn, setRateResetsOn] = useState<Date | null>(null);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  useEffect(() => {
    if (rateResetTime) {
      setRateResetsOn(new Date(rateResetTime));
    } else {
      setRateResetsOn(null);
    }
  }, [rateResetTime]);

  return (
    children && (
      <Popover open={openPopover} handler={setOpenPopover}>
        <PopoverHandler {...triggers}>{children}</PopoverHandler>
        <PopoverContent {...triggers} className="z-50 w-full sm:max-w-[26rem]">
          <div className="mb-2 flex items-center gap-3">
            <Typography
              as="a"
              href="#"
              variant="h6"
              color="blue-gray"
              className="font-bold transition-colors hover:text-gray-900"
            >
              Rate Limit
            </Typography>
            <img src={gitHubLogo} className="size-6" alt="GitHub logo" />
          </div>
          <Typography variant="h6" color="gray" className="text-blue-gray-500 font-normal">
            GitHub limits the number of REST API requests that you can make within a specific amount
            of time. Read more about it{' '}
            <a
              href="https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28"
              target="_blank" rel="noreferrer"
            >
              here
            </a>
            .
          </Typography>
          <div className="mt-4 flex flex-col items-start gap-5">
            {rateResetsOn && (
              <div className="flex items-center gap-1">
                <span className="size-3 rounded-full bg-blue-700" />
                <Typography
                  variant="h6"
                  color="gray"
                  className="text-blue-gray-500 text-xs font-medium"
                >
                  Your limit will reset on {rateResetsOn.toLocaleString()}.
                </Typography>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    )
  );
}

import { Popover } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { Typography } from 'components/Typography';
import { ReactNode } from 'react';

import './Field.style.css';

interface FieldProps {
  label?: string;
  switchLabel?: string;
  info?: string;
  id?: string;
  children: ReactNode;
  typographyCustomStyle?: string;
}

export function Field({
  children,
  label,
  id,
  switchLabel,
  info,
  typographyCustomStyle,
}: FieldProps) {
  return (
    <label
      className="field"
      htmlFor={id}
    >
      <div className="field__header">
        {label && (
          <Typography
            semibold
            as="h6"
            customStyle={typographyCustomStyle}
          >
            {label}
          </Typography>
        )}

        {info && (
          <Popover className="relative">
            <Popover.Button>
              <InformationCircleIcon className="icon text-green-600 focus:border-none focus:outline-none" />
            </Popover.Button>

            <Popover.Panel className="absolute z-10 bg-white shadow-sm rounded-md w-80 p-5">
              <Typography>{info}</Typography>
            </Popover.Panel>
          </Popover>
        )}
      </div>

      <div className="field__children">
        {children}{' '}
        {switchLabel && (
          <Typography
            customStyle="monochrome-text"
            semibold
          >
            {switchLabel}
          </Typography>
        )}
      </div>
    </label>
  );
}

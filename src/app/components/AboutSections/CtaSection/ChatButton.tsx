'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

type Props = {
  label: string;
  icon: IconDefinition;
  className: string;
  iconClassName: string;
  iconPosition: 'left' | 'right';
};

export default function ChatButton({ label, icon, className, iconClassName, iconPosition }: Props) {
  const open = () => {
    if (typeof window !== 'undefined' && window.jivo_api?.open) {
      window.jivo_api.open();
    }
  };

  return (
    <button type="button" onClick={open} className={className}>
      {iconPosition === 'left' && <FontAwesomeIcon icon={icon} className={iconClassName} />}
      <span>{label}</span>
      {iconPosition === 'right' && <FontAwesomeIcon icon={icon} className={iconClassName} />}
    </button>
  );
}

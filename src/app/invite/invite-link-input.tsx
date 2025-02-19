'use client';

import { IconButton } from '@/components/Icon-button';
import { InputField, InputIcon, InputRoot } from '@/components/input';
import { Copy, Link } from 'lucide-react';

interface InviteLinkProps {
  inviteLink: string;
}
export default function InviteLinkInput({ inviteLink }: InviteLinkProps) {
  
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField
        readOnly
        defaultValue={inviteLink}
      />

      <IconButton className="ml-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}

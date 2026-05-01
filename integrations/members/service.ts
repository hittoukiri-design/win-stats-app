import { members } from "@wix/members";
import { Member } from ".";

export const getCurrentMember = async (): Promise<Member | null> => {
  try {
    const member = await members.getCurrentMember({ fieldsets: ["FULL"] });
    return member.member;
  } catch (error) {
    return null;
  }
};

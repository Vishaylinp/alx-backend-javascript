export interface MajorCredits {
  credit: number & { __brand: 'MajorCredits.credits' };
}
export interface MinorCredits {
  creditL number & { __brand: 'MinorCredits.credits' };
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

import data from '../lib/data';
import { StaticImageData } from 'next/image';

interface Metadata {
  tags: string[];
  type: string;
}

interface DataItem {
  id: number;
  title: string;
  description: string;
  who: string;
  metadata: Metadata;
  screenshot: StaticImageData;
  url: string;
  datePublished: string;
}

describe('Data', () => {
  it('should be an array', () => {
    expect(Array.isArray(data)).toBe(true);
  });

  it('should have objects with the correct structure', () => {
    data.forEach((item: DataItem) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('description');
      expect(item).toHaveProperty('who');
      expect(item).toHaveProperty('metadata');
      expect(item.metadata).toHaveProperty('tags');
      expect(item.metadata).toHaveProperty('type');
      expect(item).toHaveProperty('screenshot');
      expect(item).toHaveProperty('url');
      expect(item).toHaveProperty('datePublished');
    });
  });
});

import data from '../lib/data';

describe('Data', () => {
  it('should be an array', () => {
    expect(Array.isArray(data)).toBe(true);
  });

  it('should have objects with the correct structure', () => {
    data.forEach((item: any) => {
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
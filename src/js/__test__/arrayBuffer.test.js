import getBuffer from '../app';
import ArrayBuffer from '../arrayBuffer';

test('перевод содержимого загруженного ArrayBuffer в строку', () => {
  const buffer = getBuffer();
  const converter = new ArrayBuffer();
  converter.load(buffer);
  const result = converter.toString();
  expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

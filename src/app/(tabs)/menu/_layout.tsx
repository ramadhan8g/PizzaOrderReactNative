import { Stack } from 'expo-router';

export default function MenuStack() {
  return (
    // mengembalikan tumpukan menu
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Menu' }} />
    </Stack>
  );
}
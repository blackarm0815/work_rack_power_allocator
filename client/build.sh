echo
# eslint
echo "checking client.ts with airbnb eslint"
if npx eslint client.ts
then
  echo "done"
else
  exit
fi
echo
# transpile typescript
echo "transpiling client.ts"
if npx tsc client.ts
then
  echo "done"
else
  exit
fi
echo
./assemble.sh
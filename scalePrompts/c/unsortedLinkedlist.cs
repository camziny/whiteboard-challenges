using System;
using System.Collections;

public class Node
{
    public int Value;
    public Node Next;

    public Node(int value)
    {
        Value = value;
        Next = null;
    }
}

public class UnsortedLinkedList : IEnumerable
{
    private Node head;

    public UnsortedLinkedList()
    {
        head = null;
    }

    public void Add(int value)
    {
        Node newNode = new Node(value);

        if (head == null)
        {
            head = newNode;
        }
        else
        {
            newNode.Next = head;
            head = newNode;
        }
    }

    public IEnumerator GetEnumerator()
    {
        return new UnsortedLinkedListEnumerator(head);
    }

    private class UnsortedLinkedListEnumerator : IEnumerator
    {
        private Node current;
        private Node head;

        public UnsortedLinkedListEnumerator(Node head)
        {
            this.head = head;
            current = null;
        }

        public object Current
        {
            get
            {
                if (current == null)
                {
                    throw new InvalidOperationException();
                }
                return current.Value;
            }
        }

        public bool MoveNext()
        {
            if (current == null)
            {
                current = head;
            }
            else
            {
                current = current.Next;
            }

            return current != null;
        }

        public void Reset()
        {
            current = null;
        }
    }
}
